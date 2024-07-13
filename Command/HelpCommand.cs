namespace Tin.Command;

[Command(Name = "help")]
internal class ExampleCommand : CommandBase
{
    public override void Exec(string[] strParams)
    {
        foreach (var param in strParams)
        {
            Console.WriteLine(param);
        }
    }
}