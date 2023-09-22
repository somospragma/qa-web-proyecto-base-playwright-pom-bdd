# proyecto-base-playwright-pom-bdd


## Name
Proyecto base de automatización con playwright -
rama: pw-charla-2


## Description
En esta rama se encuentra el contenido de la charla numero dos de playwirght, en donde realizamos un overview de las siguiente funcionalidades:

* CodeGen
* Debugging e inspector
* Tracing
* Annotations
* Assertions and locators



## Project status
<h4 align="center"> 🚧 Proyecto en construcción 🚧 </h4> 

## Consideraciones
    - Se debe tener previamente instalado playwright en el entorno de trabajo



## ✅ Technologies
### This project required:
- Playwrigth@Lastest
- Visual estudio code



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

#### Codegen
```
npx playwright codegen
```
#### Inspector and Debugging
```
npx playwright test  --debug
```
#### Tracing
```
npx playwright test --trace on
```
#### Annotations
Cuando quiero ejecutar solo las pruebas con la etiqueta @debug 
```
npx playwright test search.spec.ts --grep --% @debug
```
funciones predefinidas
```
- test.skip()
    
    marca la prueba como irrelevante. Playwright Test no realiza dicha prueba. Utilice esta anotación cuando la prueba no sea aplicable en alguna configuración.
    
- test.fail()
    
    marca la prueba como fallida. Playwright Test ejecutará esta prueba y se asegurará de que realmente falle. Si la prueba no falla, Playwright Test se quejará.
    
- test.fixme()
    
    marca la prueba como fallida. Playwright Test no ejecutará esta prueba, a diferencia de la
    
    anotación. Úselo
    
    cuando la ejecución de la prueba sea lenta o falle.
    
- test.slow()
    
    marca la prueba como lenta y triplica el tiempo de espera de la prueba.
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



