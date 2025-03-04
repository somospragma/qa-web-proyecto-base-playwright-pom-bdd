# proyecto-base-playwright-pom-bdd


## Name
base project artifact automation using playwright -


## Description
This project contains an implementation of POM pattern and BDD layer using playwrigt and cucumber. For this project you need to install the following package:

* PlayWright
```
npm init playwright@latest
```
* Cucumber
```
npm i @cucumber/cucumber -D
```
* Ts-node
```
npm i ts-node -D
```

## Project status
<h4 align="center"> 🚧 Proyecto en construcción 🚧 </h4> 




## ✅ Technologies
### This project required:
- Playwrigth@Lastest
- Visual estudio code
- Cucumber@Lastest



## 📁 Access to project

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/calidad_de_software/framework-actions-automation.git
git branch -M develop
git push -uf origin develop
```

##  🛠️ Run Commands:

### Test Execute 
```
npm run test
```

### Configure Cucumber runner 
To configure cucumber runner you need to set up your custom parameters in the file called *cucumber.json*, see the following example:
```
{
    "default":{
        "tags": "@debug",
        "formatOptions":{
            "snippetInterface" : "async-await"
        },
        "paths" : [
            "src/test/features/"
        ],
        "dryRun": false,
        "require":[
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"

        ],
        "requireModule":[
            "ts-node/register"
        ],
        "format":[
            "progress-bar",
            "html:cucumber-report.html"
        ]
    }
}
```

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Authors and acknowledgment
| [<img src="https://gitlab.com/uploads/-/system/user/avatar/15033064/avatar.png?width=400" width=115><br><sub>Cristian F. Roa C.</sub>](https://gitlab.com/cristian.roa) <br/> 


## License
Open source project.



