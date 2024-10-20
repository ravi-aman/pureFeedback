import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponce } from "@/types/ApiResponce";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponce> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: "MystryMessafe || Verification Code",
            react: VerificationEmail({ username, otp: verifyCode }),
        });
        return { success: true, message:'verification email' }; // Same here
    } catch (emailError) {
        console.error("Error sending verification email", emailError);
        return { success: false, message:'Failed to send verification email' }; // Same here
    }
}
