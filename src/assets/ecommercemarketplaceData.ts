import fullscreenA from "../assets/projects/ecommercemarketplace/fullscreenA.png"
import fullscreenB from "../assets/projects/ecommercemarketplace/fullscreenB.png"
import fullscreenC from "../assets/projects/ecommercemarketplace/fullscreenC.png"
import fullscreenD from "../assets/projects/ecommercemarketplace/fullscreenD.png"
import fullscreenE from "../assets/projects/ecommercemarketplace/fullscreenE.png"
import mobile1 from "../assets/projects/ecommercemarketplace/mobile1.png"
import mobile2 from "../assets/projects/ecommercemarketplace/mobile2.png"
import mobile3 from "../assets/projects/ecommercemarketplace/mobile3.png"
import mobile4 from "../assets/projects/ecommercemarketplace/mobile4.png"
import mobile5 from "../assets/projects/ecommercemarketplace/mobile5.png"

interface Projects{
    link:string,
    name: string,
    fullscreenA: string,
    fullscreenB: string,
    fullscreenC: string,
    fullscreenD: string,
    fullscreenE: string,
    mobile1: string,
    mobile2: string,
    mobile3: string,
    mobile4: string,
    mobile5: string,
    description: string,
    structure: string[]
}

export const projects: Projects[] = [
    {   
        link:"https://ecommercemarketplacedemo.web.app/",
        name:"Ecommerce Marketplace Demo",
        fullscreenA: fullscreenA,
        fullscreenB: fullscreenB,
        fullscreenC: fullscreenC,
        fullscreenD: fullscreenD,
        fullscreenE: fullscreenE,
        mobile1: mobile1,
        mobile2: mobile2,
        mobile3: mobile3,
        mobile4: mobile4,
        mobile5: mobile5,
        description: "I developed an ecommerce web app that allows users to shop online easily and quickly. The app features a homepage showcasing the top-rated products, a category section, a product detail page, and a secure checkout process (available only for authenticated users). Additionally, customers can manage their shopping cart through a sidebar. For the development, I used React along with React Router DOM for navigation, ContextAPI for global state management, and React Query to optimize data handling. Products are dynamically fetched from Fake Store API. I also incorporated a brutalist-style CSS library, achieving a modern, minimalist, and eye-catching design. One of the biggest challenges was optimizing the user experience, ensuring smooth navigation and efficient performance in product loading and cart management. Thanks to React Query, I improved data caching and synchronization, reducing wait times and enhancing the app’s interactivity.",
        structure: [
            "--📁 assets",
            "--📁 components",
            "----📁 AutoSlider",
            "----📁 LanguageSelector",
            "----📁 ProjectStructure",
            "--📁 config",
            "----📁 i18n",
            "------📁 locales",
            "--------📁 es",
            "--------📁 pt",
            "--------📁 en",
            "--📁 contexts",
            "--📁 sections",
            "--📁 styles",
            "--📄 App.tsx",
            "--📄 main.tsx"
        ]
    },
  ]