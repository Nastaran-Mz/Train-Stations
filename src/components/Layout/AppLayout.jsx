import Header from "../UI/Header";

const AppLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header
        title="German Train Stations"
        subtitle="Explore train stations across Germany"
      />
      <div className="flex-1 flex overflow-hidden">{children}</div>
    </div>
  );
};

export default AppLayout;
