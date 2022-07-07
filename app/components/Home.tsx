import { Accordion, AccordionItem, Button } from '@carbon/react';
import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className={'page-container'}>
      <header>
        <h1>Welcome to Remix with Carbon</h1>
        <Link to="about">About</Link> <Link to="hello">Hello</Link>
      </header>
      <h2>Components</h2>
      <Button>Hello</Button>
      <Accordion>
        <AccordionItem title="Section 1 title">
          <p>
            5 Loremg ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod 6 tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim 7 veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea 8 commodo consequat. 9{' '}
          </p>
        </AccordionItem>
        <AccordionItem title="Section 2 title">
          <p>
            13 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod 14 tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim 15 veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea 16 commodo consequat. 17{' '}
          </p>
        </AccordionItem>
        <AccordionItem title="Section 3 title">
          <p>
            21 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod 22 tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim 23 veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea 24 commodo consequat. 25{' '}
          </p>
        </AccordionItem>
        <AccordionItem title="Section 4 title">
          <p>
            29 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod 30 tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim 31 veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea 32 commodo consequat. 33{' '}
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
