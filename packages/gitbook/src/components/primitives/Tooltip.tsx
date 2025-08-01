import { tcls } from '@/lib/tailwind';
import * as RadixTooltip from '@radix-ui/react-tooltip';

export function Tooltip(props: {
    children: React.ReactNode;
    label?: string | React.ReactNode;
    providerProps?: RadixTooltip.TooltipProviderProps;
    triggerProps?: RadixTooltip.TooltipTriggerProps;
    contentProps?: RadixTooltip.TooltipContentProps;
    rootProps?: RadixTooltip.TooltipProps;
    arrow?: boolean;
    className?: string;
}) {
    const {
        children,
        label,
        providerProps,
        triggerProps,
        contentProps,
        rootProps,
        arrow = false,
        className,
    } = props;

    return (
        <RadixTooltip.Provider delayDuration={300} {...providerProps}>
            <RadixTooltip.Root {...rootProps}>
                <RadixTooltip.Trigger asChild {...triggerProps}>
                    {children}
                </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        sideOffset={4}
                        className={tcls(
                            'z-50 max-w-xs animate-scaleIn circular-corners:rounded-2xl rounded-corners:rounded-md bg-tint-12 px-2 py-1 text-contrast-tint-12 text-sm',
                            className
                        )}
                        {...contentProps}
                    >
                        {label}
                        {arrow && <RadixTooltip.Arrow />}
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
}
