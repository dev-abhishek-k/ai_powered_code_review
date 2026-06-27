import {requireAuth} from "@/features/auth/actions";
export default async function ProtectedLayout({children,}: {children: React.ReactNode;}) {
    await requireAuth();
    return (
        <div className="  bg-muted/40 px-4 py-12">
            <div className="w-full ">{children}</div>
        </div>
        );
}