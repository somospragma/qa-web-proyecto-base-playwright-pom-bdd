# proyecto-base-playwright-pom-bdd


## Name
Proyecto base de automatización con playwright 

### Editar de aqui para abajo

## Description
Este proyecto busca dejar un arquetipo base para empezar a utilizar en un patron POM

## Project status
<h4 align="center"> 🚧 Proyecto en construcción 🚧 </h4> 


## ✅ Tecnologías
### Este proyecto usa las siguientes técnologías:
- Node.js V 16+
- Windows 10+
- Visual Studio Code

Tambien se requiere la instalación del plugin de:
Playwright Test for VSCode
El cual facilita la interacción con los test y nos da una visual más amplia


## Instalación
Para instalar Playwright basta con ejecutar el comando de instalación:

```
npm init playwright@latest
```

- Despues elegir entre TypeScript o JavaScript (por defecto es TypeScript)
- Nombre de la carpeta Tests (por defecto es tests o e2e si ya tienes una carpeta tests en tu proyecto)
- Añada un flujo de trabajo de Acciones de GitHub para ejecutar fácilmente pruebas en CI (Por ahora no se usaran: false)
- Instalar navegadores Playwright (por defecto es true)

## 📁 Explicación Carpetas

- playwright-config.ts
Esta carpeta trae todas las configuraciones que se pueden realizar en Playwright, por ej: Directorio de los tests, configurar en los reportes los videos y imagenes que se requieren, configurar una url por defecto, configurar los navegadores, etc

- package.json

Nos explica las versiones que se estan utilizando en el proyecto
el autor, la descripción, etc lo normal de un package.json


##  🛠️ Run tests Chrome gradle:
```
gradle clean test -Dcontext=chrome -Dwebdriver.driver=chrome
gradle clean test --info --stacktrace --tests "ruta.nameRunner" -Dcontext=chrome -Dwebdriver.driver=chrome
gradle clean test -Dcucumber.options="--tags @someTag" -Dcontext=chrome -Dwebdriver.driver=chrome
gradle clean test -Dcucumber.options="--tags '@someTag or @someTag'" -Dcontext=chrome -Dwebdriver.driver=chrome
```
### ejemplo
```
gradle clean test --info --stacktrace --tests "co.com.pragma.runners.LoginRunner" -Dcontext=chrome -Dwebdriver.driver=chrome
```

##  🛠️ Run tests Firefox gradle:
```
gradle clean test -Dcontext=firefox -Dwebdriver.driver=firefox
gradle test --tests "co.com.pragma.runners.LoginRunner" -Dcontext=firefox -Dwebdriver.driver=firefox
```
### ejemplo
```
gradle clean test --info --stacktrace --tests "co.com.pragma.runners.LoginRunner" -Dcontext=firefox -Dwebdriver.driver=firefox
```


cucumber.options might be cucumberOptions according to version

## **Run tests in different environments:**
```
gradle command... -Denvironment=defaul
gradle command... -Denvironment=dev
gradle command... -Denvironment=qa
gradle command... -Denvironment=prod
```
### Note: 
    - The default environment will be used if no other value is provided
    - Could modify the environment urls in .../test/resources/serenity.conf


## **Run tests in different browser:**
```
gradle command... -Dwebdriver.driver=chrome
gradle command... -Dwebdriver.driver=firefox
gradle command... -Dwebdriver.driver=edge
```
### Note:
    - The chrome browser will be used if no other value is provided
    - Could add browser in ./src/test/java/co/com/pragma/stepdefinitions/SerenityWebHooks.java


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

| [<img src="https://gitlab.com/uploads/-/system/user/avatar/13437423/avatar.png?width=400" width=115><br><sub>Mauro L. Ibarra P.</sub>](https://gitlab.com/mauro.ibarrap) <br/> | [<img src="https://secure.gravatar.com/avatar/6058d585f70156b4559f8e32b753252b?s=800&d=identicon" width=115><br><sub>V. Manuel Soto</sub>](https://gitlab.com/victor.soto1) |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|

## License
Open source project.



