import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ app }) => {
  app.router.afterEach(() => {
    // Initialize or refresh AOS on route change
    AOS.init({
      duration: 800, // Animation duration
      offset: 100,   // Offset for triggering animations
      once: true,    // Whether to run animations only once
    });
  });
};
