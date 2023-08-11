import LogInForm from "@/components/LogInForm/LogInForm";
import PasswordResetForm from "@/components/PasswordResetForm/PasswordResetForm";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogInForm/>
      <SignUpForm/>
      <PasswordResetForm/>
    </main>
  )
}
