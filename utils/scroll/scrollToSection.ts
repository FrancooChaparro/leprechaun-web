export function handleScrollToSection(targetSection: string) {
    const section = document.getElementById(targetSection);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}