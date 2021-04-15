var app = new Vue ({
    el: '#root',
    data: {
        header: {
            logo: 'img/theme_eduprime_logo.png',
            navbar: [
                {
                    name: 'Home',
                    hasDropDown: true,
                    isAButton: false
                },
                {
                    name: 'Courses',
                    hasDropDown: true,
                    isAButton: false
                },
                {
                    name: 'About Us',
                    hasDropDown: false,
                    isAButton: false
                },
                {
                    name: 'News',
                    hasDropDown: true,
                    isAButton: false
                },
                {
                    name: 'Pages',
                    hasDropDown: true,
                    isAButton: false
                },
                {
                    name: 'Contact',
                    hasDropDown: false,
                    isAButton: false
                },
                {
                    name: 'Purchase',
                    hasDropDown: false,
                    isAButton: false
                },
                {
                    name: 'View courses',
                    hasDropDown: false,
                    isAButton: true
                }
            ],
            banner: {
                title: 'Key to your success',
                description: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools ect.',
                buttons: [
                    {
                        hasIcon: true,
                        icon:'fas fa-search',
                        name: 'Search courses',
                        color: 'yellow'
                    },
                    {
                        hasIcon: true,
                        icon: 'fas fa-user-plus',
                        name: 'Apply for university',
                        color: 'white'
                    }
                ]
            }
        },
        footer : {
        
        }
    }
})