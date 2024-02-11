import { PageTitle } from "./PageTitle/PageTitlle"
import { EventBoard } from "./EventBoard/EventBoard"
import upcomingEvents from '../upcoming-events.json'

export const App = () => {
  return (
    <div>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </div>
  );
}
