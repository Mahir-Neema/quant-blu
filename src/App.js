import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import FAQSection from './Components/FAQs/FAQSection';
import FAQList from './Components/FAQs/FAQList';
import ContactUs from './Components/ContactUS/ContactUs'


// these are test faq, should be fetched from backend 
const faqs = [
  { question: 'Is there a free trial available?', answer: 'Yes, you can try us for free for 30 days. If you want ,we’ll provide you with a free personalized 30 minute onboarding call to get you up and running as soon as possible.' },
  { question: 'Can I change my plan later?', answer: 'Yes, you can try us for free for 30 days. If you want ,we’ll provide you with a free personalized 30 minute onboarding call to get you up and running as soon as possible.' },
  { question: 'Can I change my plan later?', answer: 'Yes, you can try us for free for 30 days. If you want ,we’ll provide you with a free personalized 30 minute onboarding call to get you up and running as soon as possible.' },
  { question: 'Can I change my plan later?', answer: 'Yes, you can try us for free for 30 days. If you want ,we’ll provide you with a free personalized 30 minute onboarding call to get you up and running as soon as possible.' },
  { question: 'Can I change my plan later?', answer: 'Yes, you can try us for free for 30 days. If you want ,we’ll provide you with a free personalized 30 minute onboarding call to get you up and running as soon as possible.' },
  // Add more FAQs as needed
];

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <FAQSection /> 
      <FAQList faqs={faqs} />
      <ContactUs />
    </div>
  );
}

export default App;
