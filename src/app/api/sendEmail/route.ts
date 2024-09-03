import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: { json: () => PromiseLike<{ subject: any; message: any; }> | { subject: any; message: any; }; }) {
    try {
        const { subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'zoho',
            host: 'smtpro.zoho.in',
            port: 465,
            secure: true,
            auth: {
                user: 'somaiyashahin484@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOption = {
            from: 'hosnearaalom78@gmail.com',
            to: 'somaiyashahin484@gmail.com',
            subject: "Send Email Tutorial",
            html: `
        <h3>Hello Augustine</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}