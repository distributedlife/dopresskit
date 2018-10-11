export const hasVideos = (videos) => videos && videos.length > 0;
export const hasImages = (images) => images && images.length > 0;
export const hasLogos = (logos) => logos && logos.length > 0;
export const hasAwards = (company) => company.awards && company.awards.length > 0;
export const hasHistory = (company) => company.history && company.history.length > 0;
export const hasArticles = (company) => company.quotes && company.quotes.length > 0;
export const hasAdditionalLinks = (company) => company.links && company.links.length > 0;
