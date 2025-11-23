"use client";

import Input from "../ui/input";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <div id="contact" className="mt-16 sm:mt-20 md:mt-24 scroll-mt-24 w-full max-w-3xl m-auto px-4 md:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center md:text-left mb-4 sm:mb-6">
        <span className="font-bold bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">CONTACT</span>
        <br />
        HYRO VR
      </h1>
      <form action="#" method="post" className="flex flex-col gap-4 sm:gap-5 mt-6 md:mt-8" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5">
          <div className="flex-1">
            <Input
              name="name"
              type="text"
              label="Name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="flex-1">
            <Input
              name="address"
              type="text"
              label="Address"
              placeholder="Enter Your Address"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5">
          <div className="flex-1">
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="flex-1">
            <Input
              name="Phone"
              type="number"
              label="Phone"
              placeholder="Enter Your Phone"
              required
            />
          </div>
        </div>
        <Input
          name="message"
          type="text"
          label="Message"
          placeholder="Enter Your Message"
          required
          textarea
        />
        <Button variant="default" className="w-full sm:w-auto mt-2">Submit</Button>
      </form>
    </div>
  );
}
