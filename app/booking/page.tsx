"use client";

import { useState } from "react";
import { PageLayout, Heading, Button, Input, Card } from "@/components";

const STEPS = ["Choose service", "Pick date & time", "Your details"];

export default function BookingPage() {
  const [step, setStep] = useState(0);

  return (
    <PageLayout>
      <div className="mx-auto max-w-xl px-4 py-12">
        <Heading level={1}>Book an appointment</Heading>
        <div className="mt-6 flex gap-2">
          {STEPS.map((label, i) => (
            <span
              key={label}
              className={`rounded px-2 py-1 text-sm ${
                i === step ? "bg-black text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {i + 1}. {label}
            </span>
          ))}
        </div>
        <Card className="mt-6 p-6">
          {step === 0 && (
            <>
              <p className="text-gray-600">Select a service (sample options).</p>
              <div className="mt-4 flex flex-col gap-2">
                {["Haircut - $25", "Beard Trim - $15", "Hair + Beard - $35"].map(
                  (s) => (
                    <button
                      key={s}
                      type="button"
                      className="rounded border border-gray-300 p-2 text-left hover:bg-gray-50"
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <p className="text-gray-600">Pick date and time.</p>
              <Input type="date" label="Date" className="mt-4" />
              <Input type="time" label="Time" className="mt-2" />
            </>
          )}
          {step === 2 && (
            <>
              <p className="text-gray-600">Your contact details.</p>
              <Input label="Name" className="mt-4" />
              <Input type="email" label="Email" className="mt-2" />
              <Input type="tel" label="Phone" className="mt-2" />
            </>
          )}
          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              Back
            </Button>
            {step < 2 ? (
              <Button onClick={() => setStep((s) => s + 1)}>Next</Button>
            ) : (
              <Button>Confirm booking</Button>
            )}
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
