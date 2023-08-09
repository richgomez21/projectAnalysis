const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Role = require('../models/Role');

const router = express.Router();



router.get('/', async (req, res) => {
    const TOT_NUM_USERS = 10;
    
    try {
				// Will only seed the database if there are less users than we expect.                
        if((await User.findAll()).length < TOT_NUM_USERS){
					/*
		        TODO: Write your seed logic here. Note that you will likely
						want to make some helper functions in here to break up the task
						into some smaller parts.

						Seeding the database involves creating data for our Role and User
						models. In our case, there will only be two Roles: Manager and Employee.
						We will be using 10 User models (as we can see from our TOT_NUM_USERS constant).
						
						In our application, the Role model is completely independent of the User model, however,
						the User model requires a Role. Therefore, you should first create the Roles needed
						and then create the Users needed, associating each user with a Role in the proper way.
						The "proper way" being that the roleId property on the User has the primary key of the Role
						in which that User has. When you create your database, take a look at the tables created
						and you should see a foreign key of roleId on the Users table.
					*/

    const emailAddresses = [
        'manager_a@example.com',
        'manager_b@domain.com',

        'susanroberts@website.net',
        'johndoe@myweb.com',
        'janedoe@example.net',
        'bobsmith@domain.net',
        'emmajohnson@webplace.com',
        'oliviasmith@site.com',
        'jamesbrown@web.com',
        'marywilliams@website.net'
    ];

    const managerRole = await Role.create({title: "Manager"});
    const employeeRole = await Role.create({title: "Employee"});

    for(let i = 0; i < TOT_NUM_USERS; i++){
        if(i < 2){
            const userManager = await User.create({username: emailAddresses[i], 
                                                    password: await bcrypt.hash("123", 10), 
                                                    isEmployed: true, 
                                                    RoleId: managerRole.id});
        }else{
            const userEmployee = await User.create({username: emailAddresses[i],
                                                    password: await bcrypt.hash("123", 10),
                                                    isEmployed: true,
                                                    RoleId: employeeRole.id});
        }
    }
            
		        res.status(200).send('Database seeded successfully');

        } else {
            res.status(200).send('Database already seeded successfully');
        }

    } catch(error) {
        console.error('Error seeding database:', error);
        res.status(500).send('Error seeding database');
    }

    
});

module.exports = router;