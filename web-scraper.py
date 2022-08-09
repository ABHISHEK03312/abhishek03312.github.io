import argparse
import requests
from bs4 import BeautifulSoup
import json 

parser = argparse.ArgumentParser(description='Web scraper Github')
parser.add_argument('--projectsFilePath', default='/Users/abhishekvaidyanathan/Desktop/Portfolio-website', type=str, help='file path')
parser.add_argument('--projectsFileName', default='scraped-projects.json', type=str, help='file name format')
parser.add_argument('--jobsFilePath', default='/Users/abhishekvaidyanathan/Desktop/Portfolio-website', type=str, help='file path')
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
        "company_name": "Keppel Corporation Limited",
        "job_title": "Group internal Audit, Analytics and Automation",
        "date":"Singapore, Jan2022 - Jun2022",
        "job_desc":"""• Liaised with auditors to develop and manage big data pipelines using necessary ETL procedures to meet Audit use cases.
                • Worked on multiple business use-cases and deployed the relevant processes for continuous assessment by the organization.
                • Graph Analysis – Spearheaded the development of a Graph database and analyzed possible relationships between various bidders in tender bidding processes in China. Possible scaling to multiple other use case using similar techniques.
                • Risk and Assurance - Developed a robust system to analyze the risk faced by the organization due to sanctions imposed. Proposed and implemented methods such as NER to extract all possible individuals and organizations sanctioned from text documents.
                • Financial Analytics - Collaborated with auditors to flag out invoice exceptions, identify third party vendors as well as ensure control and assurance within the organization.
                • Streamlined scripts to be handle more than 50k records with 100+ fields. Improved efficiency by reducing time taken to process by almost 1/4th of original time taken.
                • Developed interactive and dynamic dashboards using PowerBI to share meaningful actionable insights.
                • Platforms and tools – Databricks, Spark, Azure Delta Lake, Cosmos DB, Gremlin API, BERT, pdfplumber, Camelot.""",
        "image_path":"./images/Keppel-logo.png"
        },
        {
        "job_id":2,
        "company_name": "Ubisoft",
        "job_title": "Data Science Intern",
        "date":"Singapore, Oct2022 - Present",
        "job_desc":"Exploring to represent game data as a knowledge Graph.",
        "image_path":"./images/ubisoft-logo.jpeg"
        },
        {
        "job_id":3,
        "company_name": "Ubisoft",
        "job_title": "Software Engineer (Machine learning) Intern",
        "date":"Singapore, Jul2022 - Sep2022",
        "job_desc":"""• Developed a web application to extract game credits from videos.
        • Processed image frames using openCV and extracted text using optical character recognition, easyOCR. 
        • Implemented k-means clustering and other techniques to map respective job titles with the names of people.
        • Designied an interactive user-interface using ReactJS to upload videos and extract game credits as well as filter data based on search parameters. \n
        • Frontend Framework – ReactJS, Backend Framework – Flask, Database – MongoDB.""",
        "image_path":"./images/ubisoft-logo.jpeg"
        },
        {
        "job_id":4,
        "company_name": "A*Star",
        "job_title": "Research Intern",
        "date":"Singapore, May2022 - Jul2022",
        "job_desc":"""• Ascertained novel ways of pruning neural networks to make them more compact.
        • Analyzed pruning rules like global pruning to achieve state-of-the-art performance.
        • Conducted research experiments on CIFAR10 and ImageNet datasets to validate new pruning rules.
        • Developed and analyzed changes made to existing algorithms to push state-of-the-art further for sparsity and accuracy achieved after pruning.
        """,
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

