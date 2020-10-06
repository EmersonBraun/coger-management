# COGER Management
COGER management system

### Prerequisites

* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [YARN](https://yarnpkg.com/)

### Installing
Clone repository
```
git clone https://github.com/EmersonBraun/coger-management.git
```
Select folder
```
cd coger-management
```
Install dependences
```
yarn or npm i
```
Create tmp folder if not exists
```
mkdir tmp
```
Build typescript
```
node ace build
```
Run migrations
```
yarn migrate or npm run migrate
```
Seed database
```
yarn seed or npm run seed or node ace db:seed -i
```
Build vue resources
```
yarn dev or npm run dev
```
Run serve
```
yarn serve or npm run serve
```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/EmersonBraun/coger-management/tags). 

## Author

* **Emerson Braun** - *Initial work* - [EmersonBraun](https://github.com/EmersonBraun)

See also the list of [contributors](https://github.com/EmersonBraun/coger-management/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details