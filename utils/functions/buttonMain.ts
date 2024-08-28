export const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return scrollToTop()
}
export const buttonMain = (pathName : string, router: any ) => { 
    if (pathName !== "/") {
      return router.push("/")
    } else { 
      return ScrollToTopButton()
    }
  }