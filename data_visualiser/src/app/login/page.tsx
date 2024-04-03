import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex min-h-screen items-start gap-4 p-4 md:items-center md:justify-center lg:gap-8">
      <div className="grid gap-4 w-full max-w-sm sm:gap-8 rounded-xl">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tighter">
              dataVisualiser
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tighter">
            Sign in to your account
          </h1>
          <p className="text-sm tracking-tighter">
            Enter your email and password to access the admin dashboard
          </p>
        </div>
        <div className="grid gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="john@example.com" type="email" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link className="text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
            <Input
              autoComplete="current-password"
              id="password"
              type="password"
            />
          </div>
          <Link href="/display">
          <Button className="h-10">Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
