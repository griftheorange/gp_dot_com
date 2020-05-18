class TextBlocks {
    static seisMix = `
    Seismix: a React web app for visualizing and querying the most up-to-date information on global seismic activity.
    SeisMix accesses data from the USGS public API, a government agency devoted to the geographic survey of the United States and tracking of worldwide seismic events. Their database provides up-to-date records of global seismic events from 1970 to the present date.
    This application is designed to facilitate queries and analysis of the API over date and magnitude ranges. By inputting a timeframe and a range of event sizes, the API is queried and the relevant data is formatted into various charts and graphics for ease-of-viewing.
    In addition to charts, the application also provides an interactive globe for geographic plotting of events. All events on the charts and the globe are clickable and viewable through their own page, and all events contain links back to the USGS source site.
    For long-term usage, users can also create accounts on the webpage. Signed in users can bookmark events of interest for later revisiting, and bookmarked events are cleanly displayed on the users profile page for ease-of-access.
    For more details, check out the Features Block, or the demo video under the title!
    `.trim()

    static budgetWeb = `
    Budget.web: A personal finance app for tracking and visualizing transactions and account balances over time.
    Budget.web was origionally designed as an app for my own personal use, and over time has been abstracted for use by any user. Because it was origionally meant for my personal use, it is unconventional in its design using a webpage GUI despite never being meant for online deployment.
    This application was desinged to provide users an interface for managing and tracking spendings and account balances over time. The data is tracked on the backend in a table listing Transaction Name, Date of Transaction, Transaction Category(provided by users), Transaction Cost, Checking & Savings Balances, and Total Current Balance.
    My personal favorite feature, and the driving motivation behind this project, is the automation of loading transaction data from credit card files. For example, a user can download their transaction data from a credit card of their choice, and add it as a new card for their app. With this new card, simply uploading transaction data from that card will automatically insert the transaction values into their table.
    The user's data table can be seeded with an excel table or CSV file, and additional transactions can be manually added. Transactions can be categorized as different types as well, which is useful for graphing.
    Transactions over time are plotted on a line graph for balance tracking, and categorized transactions can be displayed in two pie charts, spendings and spendings vs income. Across these three plots, users can track their finances over time, and compare the degrees of their spending across all their custom categories.
    Data tables can be saved as backups and exported as excel, csv or pickle files for ease of transfer to other applications. Backup tables can be re-loaded in, or the data can be re-initialized with exported files if resets are necessary.
    For more details, check out the Features Block below, or the Demo Video linked above!
    `.trim()
}

export default TextBlocks