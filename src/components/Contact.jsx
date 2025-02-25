import React from "react";
import { Card, CardContent } from "./ui/card";

function Contact() {
  return (
    <Card className="w-[80%] mx-auto" id="contact">
      <CardContent className="text-center">
        <div className="mt-5">
          <h1 className="text-3xl font-black">Contact</h1>
        </div>
      </CardContent>
    </Card>
  );
}

export default Contact;
