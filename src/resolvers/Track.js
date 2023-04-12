module.exports = {
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
    /* Track.author and Track.modules resolvers */
    durationInSeconds:({length}) => {
      length
    }
  },
};
