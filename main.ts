#! /usr/bin/env node
import inquirer from "inquirer";
let student = await inquirer.prompt(
    [
        {
            message:'Are you a student',
            type:'confirm',
            name:'confirm',
            default:false
        },
    ]
);
if(student.confirm === true){
    let id = await inquirer.prompt(
        [
            {
                message:'Enter your name',
                type:'input',
                name:'name'
            },
            {
                message:'Enter your password',
                type:'password',
                name:'password'
            },
            {
                message:'Select your course',
                type:'checkbox',
                name:'course',
                choices:['Artificial Intelligence','Graphic Designing',
                    'Web developement','Ethical Hacking']
            },
            {
                message:'Select your shift',
                type:'list',
                name:'shift',
                choices:['morning','afternoon','evening']
            }
        ]
    );
    console.log(`
        name: ${id.name}
        password: ${id.password}
        courses: ${id.course}
        shift: ${id.shift}
        `)
}else{
    console.log('We are giving an amazing opportunity to students to enhance their skills.')
};
