"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Page() {
  const handleSignIn = async () => {
    const userUid: string | null = null;
    if (userUid) {
      // create session here
    }
  };

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Sign in with your Google account.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 lg:min-w-96">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSignIn()}
          >
            Login with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
