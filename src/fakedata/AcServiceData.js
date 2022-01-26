// import AC from "../asset/ac-icon.svg"
import AC from "../images/ac-icon.svg"

export const AC_SERVICE_DATA = [
    {
        id:  1,
        title: "AC Servicing ",
        image: AC,
        items: [
            {
                id: 1,
                name: "AC Basic Service",
                image: AC,
                ton: 1.5,
                unit: 1,
                price: 499,  
            }, 
            {
                id: 2,
                name: "AC Master Service",
                image: AC,
                ton: 1.5,
                unit: 1,
                price: 999,        
            }, 
            {
                id: 3,
                name: "AC Hydro Pressure Wash",   
                image: AC, 
                ton: 1.5,
                unit: 1,
                price: 699,    
            }, 
            {
                id: 4 ,
                name: "AC Water Drop Solution", 
                image: AC, 
                ton: 1.5,
                unit: 1,
                price: 799,       
            }, 
        ]
    },
    {
        id: 2,
        title: "AC Installation & Uninstallation",
        image: AC,
        items: [
            {
                id: 5 ,
                name: "AC Installation", 
                image: AC, 
                subItem: [
                    {
                        name: "AC Installation ( Both Unit )",
                        ton: 1.5,
                        price: 1700,
                    },
                    {
                        name: "AC Installation (Indoor Unit Only)",
                        ton: 1.5,
                        price: 900,
                    },
                    {
                        name: "AC Installation (Outdoor Unit Only)",
                        ton: 1.5,
                        price: 900,
                    },
                ],    
            },
            {
                id: 6 ,
                name: "AC Uninstallation or Dismanting",  
                image: AC,
                subItem: [
                    {
                        name: "AC Uninstallation or Dismanting( Both Unit )",
                        ton: 1.5,
                        price: 900,
                    },
                    {
                        name: "AC Uninstallation or Dismanting (Indoor Unit Only)",
                        ton: 1.5,
                        price: 600,
                    },
                    {
                        name: "AC Uninstallation or Dismanting (Outdoor Unit Only)",
                        ton: 1.5,
                        price: 700,
                    },
                ]
            },
            {
                id: 7 ,
                name: "AC installation & Uninstallation", 
                image: AC,
                subItem: [
                    {
                        name: "AC installation & Uninstallation ( Both Unit )",
                        ton: 1.5,
                         price: 2500,
                    },
                    {
                        name: "AC installation & Uninstallation (Indoor Unit Only)",
                        ton: 1.5,
                        price: 1500,
                    },
                    {
                        name: "AC installation & Uninstallation (Outdoor Unit Only)",
                        ton: 1.5,
                        price: 1500     ,
                    },
                ],
            },
        ]
    },
    {
        id: 3,
        title: "AC Not Cooling/Rpeair",
        image: AC,
        items:[
            {
                id: 8,
                name: "AC Gas Charge", 
                image: AC,
                ton: 1.5,
                price: 999, 
            },
            {
                id: 9,
                name: "AC Leakage Repair", 
                image: AC,
                ton: 1.5,
                price: 999, 
            },
            {
                id: 10,
                name: "AC Circuit Repair/Change", 
                image: AC,
                ton: 1.5,
                price: 2000, 
            },
            {
                id: 11,
                name: "AC Capacitor Replacement",
                image: AC,
                ton: 1.5,
                price: 800, 
            },
        ]
    },   
] 