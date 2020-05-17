class TextBlocks {
    static seisMix = `
    Seismix: a React web app for visualizing and querying the most up-to-date information on global seismic activity.
    SeisMix accesses data from the USGS public API, a government agency devoted to the geographic survey of the United States and tracking of worldwide seismic events. Their database provides up-to-date records of global seismic events from 1970 to the present date.
    This application is designed to facilitate queries and analysis of the API over date and magnitude ranges. By inputting a timeframe and a range of event sizes, the API is queried and the relevant data is formatted into various charts and graphics for ease-of-viewing.
    In addition to charts, the application also provides an interactive globe for geographic plotting of events. All events on the charts and the globe are clickable and viewable through their own page, and all events contain links back to the USGS source site.
    For long-term usage, users can also create accounts on the webpage. Signed in users can bookmark events of interest for later revisiting, and bookmarked events are cleanly displayed on the users profile page for ease-of-access.
    For more details, check out the Features Block, or the demo video under the title!
    `.trim()
}

export default TextBlocks