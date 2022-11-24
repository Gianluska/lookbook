export default function embedComponent() {
  return {
    resizer: null,

    get iframe() {
      return this.$refs.iframe;
    },

    init() {
      this.loadResizer();
    },

    async loadResizer() {
      console.log("asdads");
      window.iFrameResize(
        { heightCalculationMethod: "lowestElement" },
        this.iframe
      );
      this.resizer = this.iframe.iFrameResizer;
      this.resizer.resize();
      this.$dispatch("embed:resizer-loaded", { resizer: this.resizer });
    },

    resizeIframe() {
      this.iframe.iFrameResizer.resize();
    },

    morphComplete() {
      this.loadResizer();
      this.resizeIframe();
    },

    cleanup() {
      if (this.resizer) {
        this.resizer.removeListeners();
      }
    },
  };
}
