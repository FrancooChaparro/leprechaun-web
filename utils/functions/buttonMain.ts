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

  export function formatoContabilidad(numero: any) {
    return numero.toLocaleString('es-ES', {
      minimumFractionDigits: 0, // Asegura 2 decimales
      maximumFractionDigits: 0, // Asegura que no se muestren más de 2 decimales
  })
}