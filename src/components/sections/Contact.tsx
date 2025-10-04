import Input from "../ui/input";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <div id="contact" className="mt-24 scroll-mt-24 w-3xl m-auto">
      <h1 className="text-4xl">
        <span className="font-bold">CONTACT</span>
        <br />
        HYRO VR
      </h1>
      <form action="" method="post" className="flex flex-col gap-3 mt-3">
        <div className="flex items-center gap-5 justify-between">
          <Input
            name="name"
            type="text"
            label="Name"
            placeholder="Enter Your Name"
            required
          />
          <Input
            name="address"
            type="text"
            label="Address"
            placeholder="Enter Your Address"
            required
          />
        </div>
        <div className="flex items-center gap-5 justify-between">
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            required
          />
          <Input
            name="Phone"
            type="number"
            label="Phone"
            placeholder="Enter Your Phone"
            required
          />
        </div>
        <Input
          name="message"
          type="text"
          label="Message"
          placeholder="Enter Your Message"
          required
          textarea
        />
        <Button variant="default">Submit</Button>
      </form>
    </div>
  );
}
