let Array=[
    {
        "user_id":1,
        "name":"Gustavo Calzoni",
        "email":"Gustav@email.com",
        "numberOfProjects":5,
        "DownloadedProjects":4,
        "ProjectDetails":[{"id":1011,"project_name":"Smart UI Builder","download_count":2},
                           {"id":1012,"project_name":"Smart_Recruit","download_count":1},
                           {"id":1013,"project_name":"CAS","download_count":0},
                           {"id":1014,"project_name":"ETAP","download_count":0}]
    },
    {
        "user_id":2,
        "name":"Paityn Workman",
        "email":"Paityn@email.com",
        "numberOfProjects":7,
        "DownloadedProjects":4,
        "ProjectDetails":[{"id":1012,"project_name":"Smart_Recruit","download_count":0},
                          {"id":1013,"project_name":"CAS","download_count":0},
                          {"id":1014,"project_name":"ETAP","download_count":0}]
    },
    {
        "user_id":3,
        "name":"Giana Lipshutz",
        "email":"Giana@email.com",
        "numberOfProjects":6,
        "DownloadedProjects":3,
        "ProjectDetails":[{"id":1012,"project_name":"Smart_Recruit","download_count":0},
                          {"id":1014,"project_name":"ETAP","download_count":0}]
    },
    {
        "user_id":4,
        "name":"Zaire Rosser",
        "email":"Rosser@email.com",
        "numberOfProjects":8,
        "DownloadedProjects":5,
        "ProjectDetails":[{"id":1012,"project_name":"Smart_Recruit","download_count":0},
            {"id":1013,"project_name":"CAS","download_count":0},
            {"id":1014,"project_name":"ETAP","download_count":0}]
    }
    ]


    for(let obj of Array){
        for(let pdetails of obj.ProjectDetails){
            console.log(`${pdetails.project_name} --> ${pdetails.download_count}`)  
        }
        console.log("----------------------")
    }