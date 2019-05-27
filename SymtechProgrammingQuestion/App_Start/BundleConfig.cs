using System.Web;
using System.Web.Optimization;

namespace SymtechProgrammingQuestion
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-3.4.1.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/Content/js").Include("~/Scripts/datetime.js", "~/Content/home.js"));
        }
    }
}
