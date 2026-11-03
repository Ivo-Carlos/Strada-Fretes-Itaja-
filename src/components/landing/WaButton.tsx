import type { ReactNode } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/tracking";
import { WhatsAppIcon } from "./icons";

type Props = {
  location: string;
  service?: string;
  message?: string;
  children: ReactNode;
  className?: string;
  icon?: boolean;
};

/** Link para WhatsApp com rastreamento — todos os CTAs usam este componente. */
export function WaButton({ location, service, message, children, className = "btn-wa", icon = true }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("whatsapp_click", { button_location: location, service_interest: service ?? "geral" })}
    >
      {icon && <WhatsAppIcon />}
      {children}
    </a>
  );
}
