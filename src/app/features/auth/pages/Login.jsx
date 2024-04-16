/* eslint-disable react/react-in-jsx-scope */
import { Button } from "@/app/components/Button/button";
import { Label } from "@radix-ui/react-label";
import { FcGoogle } from 'react-icons/fc';
import { Input } from '@/app/components/Input/input'
import { Image } from "lucide-react";
function HomePage() {
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white md:grid-cols-2"> 
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-4"> 
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="mt-2 text-xs text-slate-400">
              {' '}
              see your and get consulting growth
            </p>
          </div>

          <form>
            <Button className="flex items-center w-full gap-4 px-12 bg-transparent rounded-full"
              variant="outline">
              <FcGoogle />
              Sign In with google
            </Button>
            <Label htmlFor="email">Email*</Label>
            <Input className="mt-2 mb-4 bg-transparent rounded-full" type="email" id="email" placeholder="Email" />
            <Label htmlFor="password">Password</Label>
            
            <Input className="mt-2 mb-4 bg-transparent rounded-full" type="password" id="password" placeholder="Password" />
            <Button type="submit" className="w-full mt-6 bg-indigo- rounded-full bg-indigo- hover:bg-indigo-700"
            >
              Login
            </Button>
            <Image />
          </form>
          <p className="mt-4 text-xs text-slate-200">
            @2024 All rights reserved.

          </p>
        </div>
      </div>
    </main>    
  );
}
export default HomePage;