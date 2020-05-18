class TextBlocks {
    static seisMix = `
    Seismix: a React web app for visualizing and querying the most up-to-date information on global seismic activity.
    SeisMix accesses data from the USGS public API, a government agency devoted to the geographic survey of the United States and tracking of worldwide seismic events. Their database provides up-to-date records of global seismic events from 1970 to the present date.
    This application is designed to facilitate queries and analysis of the API over date and magnitude ranges. By inputting a timeframe and a range of event sizes, the API is queried and the relevant data is formatted into various charts and graphics for ease-of-viewing.
    In addition to charts, the application also provides an interactive globe for geographic plotting of events. All events on the charts and the globe are clickable and viewable through their own page, and all events contain links back to the USGS source site.
    For long-term usage, users can also create accounts on the webpage. Signed-in users can bookmark events of interest for later revisiting, and bookmarked events are cleanly displayed on the users profile page for ease-of-access.
    For more details, check out the Features, or the Demo Video under the title!
    `.trim()

    static budgetWeb = `
    Budget.web: A personal finance app for tracking and visualizing transactions and account balances over time.
    Budget.web was initially designed as an app for my own personal use, and over time has been abstracted for use by any user. It uses a React Webpage Frontend with a Python Backend.
    This application was designed to provide users an interface for managing and tracking spendings and account balances over time. The data is tracked on the backend in a table listing Transaction Name, Date of Transaction, Transaction Category (provided by users), Transaction Cost, Checking & Savings Balances, and Total Current Balance.
    My personal favorite feature (and the driving motivation behind this project) is the automation of loading transaction data from credit card files. For example, a user can download their transaction data from a credit card of their choice, and add it as a new card for their app. With this new card, simply uploading transaction data from that card will automatically insert the transaction values into their table.
    The user's data table can be seeded with an Excel table or CSV file, and additional transactions can be manually added. Transactions can be categorized as different types as well, which is useful for graphing.
    Transactions over time are plotted on a line graph for balance tracking, and categorized transactions can be displayed in two pie charts: spendings and spendings vs income. Across these three plots, users can track their finances over time, and compare the degrees of their spending across all their custom categories.
    Data tables can be saved as backups and exported as Excel, CSV or pickle files for ease of transfer to other applications. Backup tables can be re-loaded in, or the data can be re-initialized with exported files if resets are necessary.
    For more details, check out the Features below, or the Demo Video linked above!
    `.trim()

    static gpCom = `
    GP.com: My personal landing page and resume site.
    I built GP.com as a way to collect, organize and present my project work over the course of my development journey. It was built using the React.js framework, with the Semantic-UI library and custom CSS for styling.
    GP.com provides users with a compact, aesthetic interface to view my project history, while also providing access to other sites and resources providing reference for me (e.g. Resume, Blogs, Social Media, Github).
    The site was built with a very modular settup in mind, using the full potential of React Components to construct many unique pages from organized sub-components. Because of this, long-term maintinence of the site and updates with new project, pages, etc. should prove very simple.
    As a result I hope to maintain this site as a constant, up-to-date reference of my work, and I hope you enjoy viewing it as much as I've enjoyed building it!
    `.trim()
}

export default TextBlocks