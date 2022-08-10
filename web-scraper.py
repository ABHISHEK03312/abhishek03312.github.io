import argparse
import requests
from bs4 import BeautifulSoup
import json 

parser = argparse.ArgumentParser(description='Web scraper Github')
parser.add_argument('--projectsFilePath', default='/Users/abhishekvaidyanathan/Desktop/abhishek03312.github.io/src', type=str, help='file path')
parser.add_argument('--projectsFileName', default='scraped-projects.json', type=str, help='file name format')
parser.add_argument('--jobsFilePath', default='/Users/abhishekvaidyanathan/Desktop/abhishek03312.github.io/src', type=str, help='file path')
parser.add_argument('--jobsFileName', default='scraped-jobs.json', type=str, help='file name format')
parser.add_argument('--webURL', default='https://github.com/ABHISHEK03312?before=Y3Vyc29yOnYyOpK5MjAyMC0wNS0yOVQxOToyNzo1MyswNTozMM4P92DL&tab=repositories', type=str, help='web url to scrape')

def get_json_dict(json_object,data_div):
    for names in data_div:
        href = names.find("a")['href']
        name = href[15:]
        link = "https://github.com"+href
        visibility = names.find("span",class_="Label Label--secondary v-align-middle ml-1 mb-1").get_text()
        sub = requests.get(link)
        sub_soup = BeautifulSoup(sub.content,'lxml')
        try:
            about = sub_soup.find("p" ,class_="f4 my-3").getText().strip()
        except:
            about="None"
        languages = []
        for language in sub_soup.find_all("div" ,class_="BorderGrid-row")[-1].find_all("span",class_="color-fg-default text-bold mr-1"):
            languages.append(language.getText())

        sub_data_dict = {}
        sub_data_dict["name"]=name
        sub_data_dict['link']=link
        sub_data_dict['visibility']=visibility
        sub_data_dict['about']=about
        sub_data_dict['languages']=languages

        # json_object[name] = sub_data_dict
        json_object.append(sub_data_dict)

def scrape_data(link,json_object):
    res=requests.get(link)
    soup_data=BeautifulSoup(res.content,'lxml')
    page = soup_data.find_all("div" ,class_="col-10 col-lg-9 d-inline-block")
    get_json_dict(json_object,page)
    pages = soup_data.find_all("a",class_='btn btn-outline BtnGroup-item')
    if len(pages)==0:
        print("End of scraping")
    elif(pages[-1].getText()=='Next'):
        print("Next page")
        scrape_data(pages[-1]['href'],json_object)
    else:
        print("End of scraping")

def save_to_json(file_path,json_object):
    with open(file_path, "w") as outfile:
        json.dump(json_object, outfile)

def create_job_json():
    job_json = [{
        "job_id":1,
        "job_type":"Internship",
        "company_name": "Keppel Corporation Limited",
        "job_title": "Group internal Audit, Analytics and Automation",
        "date":"Singapore, Jan2022 - Jun2022",
        "job_desc":"""• Liaised with auditors to develop and manage big data pipelines using necessary ETL procedures and deployed the relevant processes for continuous assessment using dynamic PowerBI dashboards.
                    • Spearheaded projects in different areas such as using graphical analysis to determine underlying relationships between Chinese companies and analyzing risk faced by the organization due to the sanctions imposed.
                    • Improved efficiency by reducing time taken to process by almost 1/4th of original time taken.
                    • Skills: Cypher Query Language · Gremlin Query Language · Invoice Processing · Azure Cosmos DB · Azure Databricks · PySpark · Microsoft Power BI""",
        "image_path":"./images/Keppel-logo.png"
        },
        {
        "job_id":2,
        "job_type":"Internship",
        "company_name": "Ubisoft",
        "job_title": "Data Science Intern",
        "date":"Singapore, Oct2021 - Jan2022",
        "job_desc":"""• Exploring to represent game data as knowledge graphs. 
                    • Experimented using graph embedding to represent the entities and their relations in 2D space. 
                    • Used triplet representation as subject, object and predicate to build knowledge graphs
                    • Performed natural language processing to query results using SPARQL. 
                    • Analysed the use of rule mining to better understand the underlying relations and help in querying. 
                    • Studied the use of pykeen for a knowledge graph embeddings and representation.
                    • Skills: Cypher Query Language · pykeen""",
        "image_path":"./images/ubisoft-logo.jpeg"
        },
        {
        "job_id":3,
        "job_type":"Internship",
        "company_name": "Ubisoft",
        "job_title": "Software Engineer (Machine learning) Intern",
        "date":"Singapore, Jul2021 - Sep2021",
        "job_desc":"""• Developed a web application to extract game credits from videos.
                    • Processed image frames using openCV and extracted text using optical character recognition, easyOCR.
                    • Implemented k-means clustering and other techniques to map respective job titles with the names of people.
                    • Designied an interactive user-interface using ReactJS to upload videos and extract game credits as well as filter data based on search parameters. 
                    • Frontend Framework – ReactJS, Backend Framework – Flask, Database – MongoDB.
                    • Skills: React.js · OpenCV · MongoDB · Flask""",
        "image_path":"./images/ubisoft-logo.jpeg"
        },
        {
        "job_id":4,
        "job_type":"Internship",
        "company_name": "A*Star",
        "job_title": "Research Intern",
        "date":"Singapore, May2021 - Jul2021",
        "job_desc":"""• Ascertained novel ways of pruning neural networks to make them more compact.
        • Analyzed pruning rules like global pruning to achieve state-of-the-art performance.
        • Conducted research experiments on CIFAR10 and ImageNet datasets to validate new pruning rules.
        • Developed and analyzed changes made to existing algorithms to push state-of-the-art further for sparsity and accuracy achieved after pruning.
        • Skills: Pytorch · Neural Networks""",
        "image_path":"./images/Astar-logo.jpeg"
        }
    ]
    return job_json

if __name__ == "__main__":
    args = parser.parse_args()
    json_object = []
    link = args.webURL
    scrape_data(link,json_object)
    job_json = create_job_json()
    if(args.projectsFilePath[-1]=='/'):
        projects_file_path = args.projectsFilePath+args.projectsFileName
    else:
        projects_file_path = args.projectsFilePath+'/'+args.projectsFileName
    if(args.jobsFilePath[-1]=='/'):
        jobs_file_path = args.jobsFilePath+args.jobsFileName
    else:
        jobs_file_path = args.jobsFilePath+'/'+args.jobsFileName
    save_to_json(projects_file_path,json_object)
    save_to_json(jobs_file_path,job_json)

