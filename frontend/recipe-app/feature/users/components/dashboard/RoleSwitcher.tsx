import { Switch } from "@/components/ui/switch";

type RoleSwitcherProps = {
    isAdmin: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    label: string;
};

export function RoleSwitcher({ isAdmin, onChange, disabled, label }: RoleSwitcherProps) {
    return (
        <div className="">
            <Switch
                dir="ltr"
                checked={isAdmin}
                onCheckedChange={onChange}
                disabled={disabled}
                aria-label={label}
            />
        </div>
    );
}