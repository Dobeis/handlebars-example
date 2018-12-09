const handlebar = require('handlebars')
const fs = require('fs')
const path = require('path')

const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'email.template'), {
    encoding: 'utf-8'
})

handlebar.registerHelper('fullName', person => {
    return person.firstName + " " + person.lastName;
});

const compileTemplate = handlebar.compile(emailTemplate)

const result = compileTemplate({
    users: [{
        person: {
            firstName: "Sir",
            lastName: "Maico"
        },
        jobTitle: "Front End Developer",
        twitter: "Topzir Maico"
    }, {
        person: {
            firstName: "Sancor",
            lastName: "Seguros"
        },
        jobTitle: "Fotografo",
        twitter: "FotoAGrafia"
    }, {
        person: {
            firstName: "Dona",
            lastName: "Ninpha"
        },
        jobTitle: "Vendor",
        twitter: "DonaVendoNinpha"
    }]
})

fs.writeFileSync(path.resolve(__dirname, 'index.html'), result, {
    encoding: 'utf-8'
})


