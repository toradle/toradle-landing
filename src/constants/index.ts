import { LinkItem } from "@/types/header";

export const APP_NAME = "Toradle";
export const EFFECTIVE_DATE = "2024/08/23";
export const CONTACT_EMAIL = "contact@toradle.com";

export const STYLE = {
  backgroundImage: 'url(/home-bg.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

export const DISCLAIMER = `
DISCLAIMER: Toradle operates solely as an advisory platform.
Our offerings are the product of proprietary algorithms and independent research,
with no affiliations with any particular companies.
While we strive to provide the most accurate advice possible,
please note that all investments inherently involve risk.
Therefore, Toradle cannot be held accountable for any losses incurred following our advisories.
Users are encouraged to conduct their own due diligence before making any investment decisions.
Thank you for your understanding.
`;

export const NAV_LINKS: LinkItem[] = [
    {
        id: 'aboutus',
        title: "About us",
        link: "/aboutus"
    },
    {
        id: 'how-we-work',
        title: "How Toradle works",
        link: "/howwework"
    },
    {
        id: 'contact-us',
        title: "Contact us",
        link: "/contactus"
    }
];

export const ABOUT_US = [
  {
    title: "Our Unique Approach",
    content: "Toradle stands apart from other trading platforms with our proprietary machine learning algorithm. Unlike traditional methods that rely on news reports, gossip, or graphical analysis, Toradle uses precision mathematics to calculate the statistical probability of price events. This ensures a high likelihood of success, focusing purely on quantitative data from open-source and third-party APIs."
  },
  {
    title: "How It Works",
    content: "Our algorithm continuously processes market data to identify potential buy or sell opportunities in real time. By avoiding the biases inherent in graphical and technical analysis, we offer our users a clear advantage. We also provide a unique Tranche size analysis, helping you determine the optimal budget for each trade and enabling cost averaging for more successful outcomes."
  },
  {
    title: "Our Commitment",
    content: "At Toradle, we believe in leveraging our expertise so you don't have to worry about creating complex trading algorithms. Our goal is to provide you with high-probability trade recommendations, backed by rigorous mathematical analysis and a commitment to accuracy. We want to give everyone a high chance of making money from the market. Our mission is to democratize financial success."
  }
];

export const WHY_TORADLE_POINTS = [
  {
    title: "Precision and Accuracy",
    description: "Our algorithm's foundation in precision mathematics ensures highly accurate and reliable trade recommendations."
  },
  {
    title: "Purely Data-Driven",
    description: "Toradle's reliance on quantitative data from open-source and third-party APIs guarantees unbiased and objective insights."
  },
  {
    title: "No User Algorithms Needed",
    description: "Trust in our expertise to provide you with effective trading strategies, without the need for you to develop your own algorithms."
  },
  {
    title: "Unique Tranche Size",
    description: "Benefit from our unique Tranche size analysis to optimize your trade budgets and enhance your trading success."
  }
];

export const HOW_WE_WORK_SECTIONS = [
    {
        title: "Data Collection and Analysis",
        points: [
            "Toradle utilizes open-source and third-party APIs to gather comprehensive market data, focusing solely on quantitative information.",
            "Our algorithm processes this data using advanced mathematical models to identify potential price events, free from the influence of news reports, social media, or speculative rumors."
        ]
    },
    {
        title: "Algorithmic Strategy Development",
        points: [
            "The core of Toradle is its sophisticated machine learning algorithm, which is built on precision mathematics and proprietary logic.",
            "Our algorithm calculates the statistical probability of price events, indicating whether there is a high likelihood of a sell or a buy opportunity."
        ]
    },
    {
        title: "Real-Time Market Monitoring",
        points: [
            "Toradle continuously monitors the market in real-time, ensuring that our recommendations are always based on the latest data.",
            "The algorithm updates its calculations instantly as new data becomes available, providing you with timely and actionable insights."
        ]
    },
    {
        title: "No Charting or Graphical Analysis",
        points: [
            "Unlike other algorithmic trading platforms, Toradle does not rely on charting or graphical analysis.",
            "Our approach is purely mathematical, focusing on data-driven insights and statistical probabilities to guide your trading decisions."
        ]
    },
    {
        title: "Expert-Driven Trade Recommendations",
        points: [
            "Toradle offers expert-driven trade recommendations, eliminating the need for users to create their own trading algorithms.",
            "Our platform provides clear, concise advice based on our internal expertise, giving you a high probability of success with each trade."
        ]
    },
    {
        title: "Tranche Size Analysis",
        points: [
            "Unique to Toradle, our platform includes Tranche size analysis, helping you determine the optimal budget for any trade.",
            "By using cost averaging techniques, we enable you to make informed and successful trades, minimizing risk and maximizing returns."
        ]
    }
];

