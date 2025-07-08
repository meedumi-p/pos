import DefaultCard from "./cards/DefaultCard";
import DefaultChart from "./cards/DefaultChart";
import MinQtyCard from "./cards/MinQtyCard";

function Home() {
  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <DefaultCard
              thumbnail="https://img.freepik.com/free-photo/close-up-people-shaking-hands-work_23-2149300660.jpg"
              description=" This is a wider card with supporting text below"
              title="Customers"
              value={250}
              key={1}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <DefaultCard
              thumbnail="https://img.freepik.com/free-photo/young-man-working-warehouse-with-boxes_1303-16616.jpg"
              description="this is a wider card with supporting text below"
              title="Products"
              value={250}
              key={1}
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <DefaultCard
              thumbnail="https://img.freepik.com/premium-photo/black-friday-composition-with-three-bags-cart_23-2147709333.jpg"
              description="This is a wider card with supporting text below"
              title="orders"
              value={250}
              key={1}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <DefaultCard
              thumbnail="https://img.freepik.com/premium-photo/female-hand-holding-dollars-isolated-white_392895-569522.jpg"
              description="This is a wider card with supporting text below"
              title="Income"
              value={250}
              key={1}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 col-md-9">
            <div className="context">
              <DefaultChart />
            </div>
          </div>
          <div className="col-12 col-md-3">
            <MinQtyCard />
            <MinQtyCard />
            <MinQtyCard />
            <MinQtyCard />
            <MinQtyCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
