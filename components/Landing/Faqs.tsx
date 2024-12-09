import Container from "@/components/Layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Made in AASTU?",
    answer:
      "Made in AASTU is a platform dedicated to showcasing student-led projects, connecting them with investors, and fostering innovation within the academic community.",
    value: "item-1",
  },
  {
    question: "How can I submit a project to the platform?",
    answer:
      "You can submit a project by creating an account, navigating to the 'Submit Project' section, and filling out the required details. Ensure your project meets the submission guidelines before applying.",
    value: "item-2",
  },
  {
    question: "Who can use Made in AASTU?",
    answer:
      "Made in AASTU is open to students, faculty members, and alumni of AASTU who wish to showcase their innovative projects. Additionally, investors, mentors, and collaborators are welcome to explore opportunities on the platform.",
    value: "item-3",
  },
  {
    question: "Are there any fees for using the platform?",
    answer:
      "No, Made in AASTU is completely free to use for students and alumni. Investors and mentors can also access the platform without any charges.",
    value: "item-4",
  },
  {
    question: "How do I connect with investors or mentors?",
    answer:
      "Once your project is live on the platform, our platform will help you directly through contacting investors. Additionally, you can participate in networking events organized through the platform.",
    value: "item-5",
  },
  {
    question: "Can I update my project after submitting it?",
    answer:
      "Yes, you can update your project details at any time by logging into your account and editing the project submission. This ensures your information stays current and relevant.",
    value: "item-6",
  },
  {
    question: "How does Made in AASTU ensure project visibility?",
    answer:
      "Projects are showcased on our homepage and categorized for easy discovery. Additionally, we feature selected projects in newsletters and events to maximize exposure.",
    value: "item-7",
  },
  {
    question: "How are projects selected for funding?",
    answer:
      "Our platform will have a review process that will review and select those that are eligible for showcasing their project. We showcase these potential proejcts to investors and the funding decisions will be made solely by the investors.",
    value: "item-8",
  },
];

export default function FAQs() {
  return (
    <div id="faq" className="text-primary">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQS
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
