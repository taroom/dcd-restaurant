import CONFIGURATION from "../globals/configuration";

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this.openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIGURATION.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      this.fetchRequest(request);
      return response;
    }
    return this.fetchRequest(request);
  },

  async openCache() {
    return caches.open(CONFIGURATION.CACHE_NAME);
  },

  async fetchRequest(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    await this.addCache(request);
    return response;
  },

  async addCache(request) {
    const cache = await this.openCache();
    cache.add(request);
  },
};

export default CacheHelper;
