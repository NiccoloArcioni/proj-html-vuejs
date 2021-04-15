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
            infos: {
                logo: 'img/theme_eduprime_logo.png',
                description: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools ect.',
                socials: [
                    'fab fa-facebook-f',
                    'fab fa-twitter',
                    'fab fa-instagram'
                ]
            },
            lists: [
                {
                    name: 'Get EduPrime',
                    list: [
                        'Request a website',
                        'Browse Themes',
                        'Payment optipns',
                        'Support System',
                        'Checkout',
                        'Purchase Theme'
                    ]
                },
                {
                    name: 'Networking',
                    list: [
                        'Purchase Theme',
                        'Our Benefits',
                        'Our Team',
                        'Our Services',
                        'Other Products',
                        'My Account'
                    ]
                }
            ],
            searchCategories: {
                hasInput: true,
                inputPlaceholder: 'Search...',
                inputBtn: {
                    icon: 'fas fa-search',
                    color: 'yellow'
                },
                title: 'Search categories',
                categories: [
                    'economy',
                    'design',
                    'coaching',
                    'business',
                    'medicine',
                    'law',
                    'fitness'
                ],
                rightReserved: 'ModelTheme.All right reserved.'
            }
        }
    }
})