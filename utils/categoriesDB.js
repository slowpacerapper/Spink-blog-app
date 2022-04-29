import Gospel1 from "../public/gospel.jpeg";
import Gospel2 from "../public/gospel2.jpeg";
import Gospel3 from "../public/gospel3.jpeg";
import Gospel4 from "../public/gospel4.jpeg";
import Gospel5 from "../public/gospel5.png";
import Entertainment from "../public/entertainment.webp";
import Movies from "../public/movies.webp";
import Music from "../public/music.webp";
import Sports from "../public/sports.jpeg";
import Comedy from "../public/comedy.jpeg";
import Phone from "../public/phone.webp";
import Laptop from "../public/laptop.webp";
import Earbud from "../public/earbud.jpeg";
import Apple from "../public/applewatch.webp";
import Politics from "../public/politics.jpeg";
import Canada from "../public/canada.jpeg";
import Nigeria from "../public/nigeria.jpeg";
import India from "../public/india.png";
import Usa from "../public/america.jpeg";
import Automobile from "../public/automobile.webp";
import Auto2 from "../public/auto2.jpeg";
import Auto3 from "../public/auto3.webp";
import Auto4 from "../public/auto4.jpeg";

const date = Date.now();
const currentDate = new Date(date);
let idVal = 0;
export const categoriesDb = [
  {
    id: ++idVal,
    author: "Spink",
    type: "main",
    category: "Gospel",
    image: Gospel1,
    title: "Winning The War in Your Mind",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`,
  },
  {
    id: ++idVal,
    author: "Spink",
    type: "main",
    category: "Entertainment",
    image: Entertainment,
    title: "Tbhe World of Entertainment",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`,
  },
  {
    id: ++idVal,
    author: "Spink",
    type: "main",
    category: "Gadgets",
    image: Phone,
    title: "Mobile Accessories",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`,
  },
  {
    id: ++idVal,
    author: "Spink",
    type: "main",
    category: "Politics",
    image: Politics,
    title: "The World Politics",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`,
  },
  {
    id: ++idVal,
    author: "Spink",
    type: "main",
    category: "Automobiles",
    image: Automobile,
    title: "The World of Automobiles",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`,
  },

  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    label: "new",
    category: "Automobiles",
    image: Auto3,
    title: "The World of Automobiles",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    label: "new",
    category: "Automobiles",
    image: Auto2,
    title: "Car Assembling Plants",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Automobiles",
    image: Auto3,
    title: "Power Bikes",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Automobiles",
    image: Auto4,
    title: "Modern Customized Train",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Gospel",
    image: Gospel2,
    title: "The Replacement Principle",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Gospel",
    image: Gospel3,
    title: "Why I Can't Change",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Gospel",
    label: "new",
    image: Gospel4,
    title: "Learn to Love in Four Steps",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Gospel",
    image: Gospel5,
    title: "Love One Another",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Politics",
    image: Nigeria,
    title: "The Nigerian Politics",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Politics",
    image: Canada,
    title: "The Canadian Politics",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    label: "new",
    category: "Politics",
    image: Usa,
    title: "The American Politics",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Politics",
    image: India,
    title: "The Indian Politics",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Gadgets",
    image: Earbud,
    title: "The Climax III Earbud",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Gadgets",
    image: Apple,
    title: "The Apple Wrist Watch",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    label: "new",
    category: "Gadgets",
    image: Phone,
    title: "The New Android Phones",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Gadgets",
    image: Laptop,
    title: "The Famous CoreXX Laptop",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Entertainment",
    image: Movies,
    title: "The World of Movies",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    label: "new",
    category: "Entertainment",
    image: Music,
    title: "The World of Music",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    category: "Entertainment",
    image: Sports,
    title: "The World of Sports",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
  {
    id: ++idVal * 2,
    author: "Spink",
    type: "children",
    label: "new",
    category: "Entertainment",
    image: Comedy,
    title: "The World of Comedy",
    createdAt: currentDate.toDateString(),
    story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`,
  },
];
