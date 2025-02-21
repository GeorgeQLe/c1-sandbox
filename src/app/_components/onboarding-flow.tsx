"use client"
import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

type OnboardingStep = {
  fields: {
    label: string;
    options?: string[];
    name: string;
    placeholder?: string;
    type: "text" | "email" | "select";
  }[];
  title: string;
};

const steps: OnboardingStep[] = [
  {
    fields: [
      { label: "Full Name", name: "fullName", type: "text" },
      { label: "Work Email", name: "email", placeholder: "name@us.af.mil", type: "email" },
      { label: "C1 Team", name: "c1Team", placeholder: "Engineering, cyber, etc.", type: "text" },
      {
        label: "Project Name",
        name: "projectName",
        placeholder: "e.g. 'Project X'",
        type: "text",
      }, {
        label: "Project Description",
        name: "projectDescription",
        placeholder: "e.g. 'This project is about ...'",
        type: "text",
      }, {
        label: "Cost",
        name: "cost",
        placeholder: "e.g. '100000'",
        type: "text",
      }, {
        label: "Duration",
        name: "timeline",
        placeholder: "e.g. '1 year'",
        type: "text",
      },
    ],
    title: "Project Details",
  },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  c1Team: z.string().min(1, "Team name is required"),
  projectName: z.string().min(2, "Project name must be at least 2 characters"),
  projectDescription: z.string().min(10, "Description must be at least 10 characters"),
  cost: z.string().min(1, "Cost is required"),
  timeline: z.string().min(1, "Duration is required"),
});

const defaultValues = {
  fullName: '',
  email: '',
  c1Team: '',
  projectName: '',
  projectDescription: '',
  cost: '',
  timeline: '',
};

export default function OnboardingFlow() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues,
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
  });
  const [currentStep, setCurrentStep] = useState(0);

  const currentStepData = steps[currentStep];

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // This will only be called on the final step
    console.log("Form submitted:", data);
    toast.success("Form submitted successfully (TODO: actually submit the form). Data: " + JSON.stringify(data));
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  // Add this function to fill test data
  const fillTestData = () => {
    form.reset({
      fullName: 'John Doe',
      email: 'john.doe@us.af.mil',
      c1Team: 'Engineering',
      projectName: 'Test Project',
      projectDescription: 'This is a test project description that meets the minimum length requirement',
      cost: '100000',
      timeline: '6 months',
    });
  };

  return (
    <Card className="max-w-lg w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{currentStepData.title}</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fillTestData}
            type="button"
          >
            Fill Test Data
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => form.reset(defaultValues)}
            type="button"
          >
            <RotateCcw className="size-4"/>
          </Button>
        </div>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {currentStepData.fields.map((field) => (
              <FormField
                control={form.control}
                key={field.name}
                name={field.name as keyof z.infer<typeof formSchema>}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    {field.type === "select" ? (
                      <Select
                        defaultValue={formField.value}
                        onValueChange={formField.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={`Select ${field.label}`}/>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <FormControl>
                        <Input
                          {...formField}
                          placeholder={field.placeholder}
                          type={field.type}
                        />
                      </FormControl>
                    )}
                    <FormMessage/>
                  </FormItem>
                )}
              />
            ))}
          </CardContent>
          <CardFooter className="flex justify-between">
            {currentStep > 0 && (
              <Button
                disabled={currentStep === 0}
                onClick={handleBack}
                type="button"
                variant="outline"
              >
                Back
              </Button>
            )}
            <Button type="submit">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};