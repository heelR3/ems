

const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare Sales Report",
                "description": "Compile the monthly sales report for review.",
                "date": "2025-02-20",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Meeting",
                "description": "Attend the scheduled client meeting at 2 PM.",
                "date": "2025-02-21",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Code Review",
                "description": "Review the latest code changes submitted by the dev team.",
                "date": "2025-02-18",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Security Audit",
                "description": "Perform a security audit on the application.",
                "date": "2025-02-22",
                "category": "Security",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Documentation Update",
                "description": "Update the API documentation with new endpoints.",
                "date": "2025-02-25",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Rahul",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Database Optimization",
                "description": "Optimize the database queries for faster response time.",
                "date": "2025-02-19",
                "category": "Database",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Neha",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "UI Testing",
                "description": "Perform usability testing for the new dashboard UI.",
                "date": "2025-02-23",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Deploy New Feature",
                "description": "Deploy the new payment integration module.",
                "date": "2025-02-24",
                "category": "Deployment",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Bug Fixing",
                "description": "Fix high-priority bugs reported in the system.",
                "date": "2025-02-26",
                "category": "Bug Fixing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Sandeep",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Marketing Strategy",
                "description": "Plan and execute the new marketing campaign.",
                "date": "2025-02-28",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Social Media Update",
                "description": "Post updates and announcements on social media channels.",
                "date": "2025-03-01",
                "category": "Social Media",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return{employees, admin}
}
