import emdfull from "../assets/projects/ecommercemarketplace/fullscreen.png"
import emdmobile from "../assets/projects/ecommercemarketplace/mobile.png"
import eadfull from "../assets/projects/ecommercemarketplace/fullscreen.png"
import eadmobile from "../assets/projects/ecommercemarketplace/mobile.png"

interface Projects{
    link:string,
    name: string,
    fullscreen: string,
    mobile: string,
    description: string
}

export const projectsData: Projects[] = [
    {   
        link:"https://ecommercemarketplacedemo.web.app/",
        name:"Ecommerce Marketplace Demo",
        fullscreen: emdfull,
        mobile: emdmobile,
        description: "I developed an ecommerce web app that allows users to shop online easily and quickly. The app features a homepage showcasing the top-rated products, a category section, a product detail page, and a secure checkout process (available only for authenticated users). Additionally, customers can manage their shopping cart through a sidebar. For the development, I used React along with React Router DOM for navigation, ContextAPI for global state management, and React Query to optimize data handling. Products are dynamically fetched from Fake Store API. I also incorporated a brutalist-style CSS library, achieving a modern, minimalist, and eye-catching design. One of the biggest challenges was optimizing the user experience, ensuring smooth navigation and efficient performance in product loading and cart management. Thanks to React Query, I improved data caching and synchronization, reducing wait times and enhancing the app’s interactivity."
    },
    {   
        link:"https://ecommerce-admindemo.web.app/",
        name:"Ecommerce Admin Demo",
        fullscreen: eadfull,
        mobile: eadmobile,
        description: "I developed an ecommerce web app that allows users to shop online easily and quickly. The app features a homepage showcasing the top-rated products, a category section, a product detail page, and a secure checkout process (available only for authenticated users). Additionally, customers can manage their shopping cart through a sidebar. For the development, I used React along with React Router DOM for navigation, ContextAPI for global state management, and React Query to optimize data handling. Products are dynamically fetched from Fake Store API. I also incorporated a brutalist-style CSS library, achieving a modern, minimalist, and eye-catching design. One of the biggest challenges was optimizing the user experience, ensuring smooth navigation and efficient performance in product loading and cart management. Thanks to React Query, I improved data caching and synchronization, reducing wait times and enhancing the app’s interactivity."
    },
  ]