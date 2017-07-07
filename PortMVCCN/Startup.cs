using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PortMVCCN.Startup))]
namespace PortMVCCN
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
