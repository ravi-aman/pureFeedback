import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponce } from "@/types/ApiResponce";
import { Message } from "@/types/Message"; // Assuming you have a Message type defined

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponce> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: "Amango || Verification Code",
            react: VerificationEmail({ username, otp: verifyCode }),
        });
        return { success: true, message: [{ content: 'Verification Email sent successfully' }] as Message[] }; // Change to return an array of messages
    } catch (emailError) {
        console.error("Error sending verification email", emailError);
        return { success: false, message: [{ content: 'Failed to send verification email' }] as Message[] }; // Same here
    }
}
